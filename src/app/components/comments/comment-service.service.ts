import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/commentInterfaces';

export const comments: Comment[] = [
  {
    id: 1,
    nick: 'El comentador',
    content:
      'El fútbol americano es un emocionante deporte de equipo con choques estratégicos, pases precisos y una intensidad única en cada jugada.',
  },
  {
    id: 2,
    nick: 'Doña Treme',
    content: 'Bueno, joven, parece que esta Revolución de la Inteligencia Artificial en la Conversación está transformando la forma en que nos comunicamos y aprendemos en estos tiempos digitales. ¡Es asombroso!'
  },
];

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  public comentarios: Comment[] = [
    {
      id: 2,
      nick: 'Doña Treme',
      content:
        'Bueno, joven, parece que esta Revolución de la Inteligencia Artificial en la Conversación está transformando la forma en que nos comunicamos y aprendemos en estos tiempos digitales. ¡Es asombroso!',
    },
  ].reverse();

  constructor() {
    this.loadFromLocalStorage();
  }

  private commentsSubject = new BehaviorSubject<Comment[]>(this.comentarios);

  public addComment(newComment: Comment) {
    this.comentarios.unshift(newComment);
    this.update();
  }

  public getComments(): Observable<Comment[]> {
    return this.commentsSubject.asObservable();
  }

  private update() {
    this.commentsSubject.next(this.comentarios);
    this.updateLocalStorage();
  }

  // Local Storage

  //get of localStorage
  private loadFromLocalStorage() {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comentarios = JSON.parse(storedComments);
    }
    this.update();
  }

  // create and update localStorage

  private updateLocalStorage() {
    localStorage.setItem('comments', JSON.stringify(this.comentarios));
  }
}
