import { Injectable } from '@angular/core';

import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';

import { ProfileResponse } from '../../api/profile/profile.response';
import { ProfileResource } from '../../api/profile/profile.resource';

import { Profile } from './profile';
import { MicroEvent } from './micro-event';

import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MicroEventService {

  private static parseIsoDatetime(dtstr: string): Date {
    const dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
  }

  constructor(
    private _eventResource: EventResource,
    private _profileResource: ProfileResource) { }

  findAll(): Observable<MicroEvent[]> {

    return zip(
      this._eventResource.findAll(),
      this._profileResource.findAll(),
    ).pipe(
      map(([eventResponses, profileResponses]) => {
        const profileMap = profileResponses.map(pr => {
          return {
            ...pr
          } as Profile
        }).reduce((result, profile) => { 
          result[profile.id] = profile;
          return result;
        }, {});
        
        return eventResponses.map(er => {
          return {
            ...er,
            eventDate: MicroEventService.parseIsoDatetime(er.eventDate),
            participants: er.participantIds.map(participantId => profileMap[participantId])
          } as MicroEvent
        });
      })
    );
  }

}