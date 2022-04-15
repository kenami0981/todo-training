import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextDTO } from '../../../../publ/application/ports/secondary/context.dto';

export const CONTEXT_DTO_STORAGE = new InjectionToken<ContextDtoStoragePort>('CONTEXT_DTO_STORAGE');

export interface ContextDtoStoragePort {
  next(item: Partial<ContextDTO | undefined>): void;
  asObservable(): Observable<ContextDTO>;
}
