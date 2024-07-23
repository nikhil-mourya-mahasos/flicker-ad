<!-- src/components/NotFound.vue -->
<template>
  <section class="center h-full">
    <section class="lg:m-20 m-5 lg:mx-40 mx-5 w-full md:container center">
      <div class="lg:w-4/6 md:w-5/6 w-full">
        <div class="text-left font-semibold">
          <div class="my-2 flex justify-start gap-5 items-center">
            <div class="md:hidden" @click="goBack()">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="black"
                />
              </svg>
            </div>
            <h4>All Notifications</h4>
          </div>

          <div class="flex row-auto flex-col gap-5 h-[100vh] md:h-auto">
            <NotificationItem
              v-for="(item, index) in notificationList"
              :key="index"
              :profile-picture="item.profilePicture"
              :title="item.title"
              :time-stamp="item.timeStamp"
              :user-name="item.userName"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import NotificationItem from "@/components/Account/Notification/NotificationItem.vue";
export default {
  name: "NotificationPage",
  components: {
    NotificationItem,
  },
  data() {
    return {
      notificationList: [
        {
          profilePicture:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
          userName: "Jamie Solorio",
          timeStamp: "7 March 2024 | 12:12 AM",
          title:
            "Reply your comment in knowledgebase Adding agent...Paresetnt ultricies lacus in ligula volutpta feugiat.",
        },
        {
          profilePicture:
            "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
          userName: "Santi Cazorla",
          timeStamp: "7 March 2024 | 12:12 AM",
          title:
            "Reply your comment in knowledgebase Adding agent...Paresetnt ultricies lacus in ligula volutpta feugiat.",
        },
        {
          profilePicture:
            "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg",
          userName: "Kya James",
          timeStamp: "7 March 2024 | 12:12 AM",
          title:
            "Reply your comment in knowledgebase Adding agent...Paresetnt ultricies lacus in ligula volutpta feugiat.",
        },
        {
          profilePicture:
            "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
          userName: "Santa Monica",
          timeStamp: "7 March 2024 | 12:12 AM",
          title:
            "Reply your comment in knowledgebase Adding agent...Paresetnt ultricies lacus in ligula volutpta feugiat.",
        },
      ],
    };
  },
  methods: {
    goBack() {
      //   router.go(-1);
      window.history.go(-1);
    },
  },
};
</script>

<style scoped></style>
