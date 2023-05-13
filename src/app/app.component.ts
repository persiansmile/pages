import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pages';
  currentPage = 0;
  images = [
    {
      title: 'snowFlake',
      url: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'snowTree',
      url: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ',
    },
    {
      title: 'fireWork',
      url: 'https://plus.unsplash.com/premium_photo-1671288795359-5a505b9c6663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'fire',
      url: 'https://images.unsplash.com/photo-1618325508550-951512a1e82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'water',
      url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'grass',
      url: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'mist',
      url: 'https://plus.unsplash.com/premium_photo-1667066289689-48f860e1dde3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'dew',
      url: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80',
    },
  ];
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
