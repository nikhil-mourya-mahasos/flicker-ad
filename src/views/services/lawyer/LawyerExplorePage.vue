<script setup>
// import { ref } from "vue";
import LawyerCard from "@/components/Business/Lawyer/LawyerCard.vue";
import CategoryTag from "@/components/CategoryTag.vue";

// const lawyerList = ref([{}]);
const list = [
  { name: "All" },
  { name: "Business Law" },
  { name: "Criminal Law" },
  { name: "Corporate Law" },
  { name: "Education Law" },
  { name: "Entertainment Law" },
  { name: "International Law" },
  { name: "Personal Injuiry Law" },
  { name: "Accidental Law" },
  { name: "Accomedation" },
];
const lawyerCards = [
  {
    name: "Christopher Rowells",
    rating: 5.0,
    reviews: 6,
    address: "123, Main Street, San Diego, CA",
    specialties: ["Employment Law", "Agreement", "Immigration", "Family Law", "Child"],
    contactMethods: ["Call", "Email", "Message"],
    image: "path/to/image1.jpg",
  },
  {
    name: "Jessica Smith",
    rating: 4.8,
    reviews: 10,
    address: "456, Elm Street, Los Angeles, CA",
    specialties: ["Criminal Law", "DUI", "Domestic Violence"],
    contactMethods: ["Call", "Email"],
    image: "path/to/image2.jpg",
  },
  {
    name: "John Doe",
    rating: 4.9,
    reviews: 8,
    address: "789, Pine Street, San Francisco, CA",
    specialties: ["Corporate Law", "Mergers", "Acquisitions"],
    contactMethods: ["Email", "Message"],
    image: "path/to/image3.jpg",
  },
  {
    name: "Emily Johnson",
    rating: 4.7,
    reviews: 15,
    address: "321, Oak Street, Sacramento, CA",
    specialties: ["Real Estate Law", "Property Disputes"],
    contactMethods: ["Call"],
    image: "path/to/image4.jpg",
  },
  {
    name: "Michael Brown",
    rating: 4.5,
    reviews: 5,
    address: "654, Cedar Street, San Diego, CA",
    specialties: ["Tax Law", "Estate Planning"],
    contactMethods: ["Call", "Message"],
    image: "path/to/image5.jpg",
  },
  {
    name: "Sarah Wilson",
    rating: 4.6,
    reviews: 7,
    address: "987, Birch Street, Fresno, CA",
    specialties: ["Family Law", "Divorce", "Child Custody"],
    contactMethods: ["Email"],
    image: "path/to/image6.jpg",
  },
  {
    name: "David Martinez",
    rating: 4.8,
    reviews: 9,
    address: "213, Spruce Street, San Jose, CA",
    specialties: ["Immigration Law", "Visa Applications"],
    contactMethods: ["Call", "Email"],
    image: "path/to/image7.jpg",
  },
  {
    name: "Laura Garcia",
    rating: 5.0,
    reviews: 12,
    address: "546, Maple Street, Oakland, CA",
    specialties: ["Intellectual Property Law", "Patents"],
    contactMethods: ["Call", "Message"],
    image: "path/to/image8.jpg",
  },
  {
    name: "James Anderson",
    rating: 4.9,
    reviews: 11,
    address: "879, Willow Street, Long Beach, CA",
    specialties: ["Employment Law", "Discrimination"],
    contactMethods: ["Email", "Message"],
    image: "path/to/image9.jpg",
  },
  {
    name: "Patricia Thomas",
    rating: 4.7,
    reviews: 14,
    address: "132, Palm Street, Bakersfield, CA",
    specialties: ["Environmental Law", "Land Use"],
    contactMethods: ["Call"],
    image: "path/to/image10.jpg",
  },
];
</script>
<template>
  <section class="px-3 md:px-10">
    <section class="md:col-span-3 col-span-4 overflow-hidden">
      <CategoryTag :list="list" />
    </section>
    <section class="flex justify-start gap-10 my-4">
      <div class="center">
        <h3 class="font-bold text-lg">Corporate Law</h3>
      </div>
      <div><input class="p-2 px-4 bg-transparent border-black border rounded-lg" /></div>
    </section>
    <section class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      <LawyerCard v-for="(item, index) in lawyerCards" :key="index" :name="item.name" :address="item.address" />
    </section>
  </section>
</template>
