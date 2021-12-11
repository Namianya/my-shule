import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Classes from "../views/Classes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes,
    children: [
      {
        path: ":id",
        name: "Class",
        component: () => import("../views/Class.vue"),
      },
      {
        path: "new-class",
        name: "NewClass",
        component: () => import("../views/NewClass.vue"),
      },
    ]
  },
  {
    path:"/students",
    name:"Students",
    component: () => import("../views/Students.vue",),
    children: [
      {
        path: ":id",
        name: "Student",
        component: () => import("../views/Student.vue"),
      }
      {
        path: "new-student",
        name: "AddStudent",
        component: () => import("../views/AddStudent.vue"),
      },
    ]
  },
  {
    path:"/teachers",
    name:"Teachers",
    component: () => import("../views/Teachers.vue")
  },
  {
    path:"/subjects",
    name:"Subjects",
    component: () => import("../views/Subjects.vue")
  },
  {
    path:"/exams",
    name:"Exams",
    component: () => import("../views/Exams.vue")
  },
  {
    path:"/attendances",
    name:"Attendances",
    component: () => import("../views/Attendances.vue")
  },
  {
    path:"/results",
    name:"Results",
    component: () => import("../views/Results.vue")
  },
  {
    path:"/settings",
    name:"Settings",
    component: () => import("../views/Settings.vue")
  },


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
