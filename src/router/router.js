import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/screens/HomePage.vue";
import AboutMe from "../components/screens/AboutMe.vue";
import MyBlog from "../components/screens/MyBlog.vue";
import MyWorks from "../components/screens/MyWorks.vue";
import ContactMe from "../components/screens/ContactMe.vue";

// sub components
import MyBooks from "../components/layout/works/mybooks/MyBooks.vue";
import MyArticles from "../components/layout/works/MyArticles.vue";
import MyPoems from "../components/layout/works/MyPoems.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: HomePage,
      alias: "/",
    },
    {
      path: "/about-me",
      component: AboutMe,
    },
    {
      path: "/my-blog",
      component: MyBlog,
    },
    {
      path: "/my-works",
      component: MyWorks,
      children: [
        {
          path: "books",
          component: MyBooks,
          alias: "/my-works",
        },
        {
          path: "poems",
          component: MyPoems,
        },
        {
          path: "articles",
          component: MyArticles,
        },
      ],
    },
    {
      path: "/contact-me",
      component: ContactMe,
    },
  ],
});

export default router;
