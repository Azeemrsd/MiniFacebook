import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  title = "";
  content = "";
  posts = [
    {
      id: 123,
      title: "This is the title of the first post",
      content: "This is the content of the first post posted by me!"
    }
  ];

  onPostAdded() {
    const post = {
      id: Math.random(),
      title: this.title,
      content: this.content
    };
    this.posts.unshift(post);
    console.log(post);
  }
  onDeletePost(id) {
    console.log(id)
  }
}
