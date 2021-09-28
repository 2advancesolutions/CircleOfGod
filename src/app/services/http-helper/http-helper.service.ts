import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export enum httpActions {
  GET = "GET",
  POST = "POST",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  protected readonly apiServer = "";
  constructor(private httpClient: HttpClient) {}
  public get<T>(url: string): Observable<T> {
    return this.httpClient
      .get<T>(this.apiServer + url)
      .pipe(catchError(this.errorHandler));
  }
  public getById<T>(url: string, id: number | string): Observable<T> {
    return this.httpClient
      .get<T>(this.apiServer + url + id)
      .pipe(catchError(this.errorHandler));
  }
  public getByIdCustom<T>(
    url: string,
    id: number | string,
  ): Observable<T> {
    
    return this.httpClient
    .get(url, {
      params: {
        uuid: `eq.${id}`
      },
      observe: 'response'
    })
      .pipe(catchError(this.errorHandler));
  }
  public post<T>(url: string, obj: T): Observable<T> {
    return this.httpClient
      .post<T>(this.apiServer + url, obj)
      .pipe(catchError(this.errorHandler));
  }
  public update<T>(id: number | string, obj: T, url: string): Observable<T> {
    return this.httpClient
      .put<T>(this.apiServer + url + id, obj)
      .pipe(catchError(this.errorHandler));
  }
  public delete<T>(id: number | string, url: string): Observable<T> {
    return this.httpClient
      .delete<T>(this.apiServer + url + id)
      .pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: any): Observable<any> {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error;
    } else {
      errorMessage = error.error.msg;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
