export type PostProps = {
  id: string;
  title: string;
  coverUrl: string;
  content: string;
};

export const posts = [
  {
    id: "1",
    title: "Post 1",
    coverUrl: "https://fakeimg.pl/440x320/?retina=1&text=Post1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut massa id arcu imperdiet auctor vitae quis quam. Ut in rhoncus lacus. Pellentesque vitae tortor tincidunt, scelerisque justo non, lobortis nisl. Maecenas posuere ligula in vestibulum malesuada. Praesent purus lacus, ornare ac nisi ac, vestibulum ornare dolor. Vestibulum porta mauris id neque tincidunt, ac porttitor leo lobortis. Fusce vel dignissim nibh. Donec cursus ligula lacinia neque auctor, vitae semper urna tincidunt.",
  },
  {
    id: "2",
    title: "Post 2",
    coverUrl: "https://fakeimg.pl/440x320/?retina=1&text=Post2",
    content:
      "Cras lobortis, odio sed efficitur venenatis, leo neque scelerisque libero, condimentum sodales nisl mauris at odio. Duis magna mi, ultrices sed quam tincidunt, luctus faucibus dui. Sed gravida lorem eget sem tempor interdum. Cras sed tempor nulla. Integer in enim malesuada, luctus neque quis, tincidunt ligula. Donec viverra tortor sem. Sed eget odio nibh. Duis vestibulum quis quam ac hendrerit. Ut ligula mauris, rhoncus vel vehicula eu, egestas eget nisi. Sed tempor ligula non eros pulvinar, at molestie ex viverra. Morbi sed efficitur velit. Nulla facilisi.",
  },
  {
    id: "3",
    title: "Post 3",
    coverUrl: "https://fakeimg.pl/440x320/?retina=1&text=Post3",
    content:
      "Etiam tincidunt nunc sed risus congue sagittis. Integer id sapien cursus, mollis elit vitae, facilisis dui. Donec ullamcorper enim eget nisl ornare accumsan. Fusce facilisis aliquet turpis in mattis. Nullam lacinia ante nec vehicula dapibus. Morbi condimentum at eros non volutpat. Nullam rhoncus neque quis bibendum semper. Suspendisse tempor, felis ac laoreet vulputate, lorem nisl faucibus ipsum, quis efficitur lacus justo at nisi. Praesent ut sagittis risus, a convallis lacus. Donec sed pharetra neque.",
  },
  {
    id: "4",
    title: "Post 4",
    coverUrl: "https://fakeimg.pl/440x320/?retina=1&text=Post4",
    content:
      "Aenean lectus orci, pharetra vulputate quam ut, dapibus pellentesque urna. Integer feugiat euismod velit nec porttitor. Praesent suscipit, sapien eu dapibus ultrices, nisi mauris accumsan mi, pretium fermentum urna ligula et nisi. Mauris nisi nisi, accumsan ut ex vitae, molestie posuere lectus. Fusce tristique quis dolor eget tempor. Quisque congue sem sed magna porttitor, sed gravida neque congue. Ut sit amet bibendum diam. Etiam semper lectus sed tellus molestie congue. Nulla facilisi. Maecenas id sollicitudin nunc. Suspendisse commodo eget velit eget luctus.",
  },
] as PostProps[];
