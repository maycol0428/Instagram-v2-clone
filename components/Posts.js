import React, { useEffect, useState } from "react";
import faker from "faker";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) => {
        setPosts(snapshot.docs);
      }),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        ></Post>
      ))}
      {fakePostsData().map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.profileImg}
          img={post.image}
          caption={post.caption}
        ></Post>
      ))}
    </div>
  );
};

function fakePostsData() {
  return [
    {
      id: "2a9e8411-6a00-428a-aa5f-40063e057edd",
      username: "jstares0",
      user_img: "https://robohash.org/etenimvoluptatibus.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Cis Man",
    },
    {
      id: "1969aea7-c9ca-44b2-aef8-5670f8e85c56",
      username: "fcleminshaw1",
      user_img: "https://robohash.org/numquamatquelaborum.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/cc0000/ffffff",
      caption: "Cisgender Female",
    },
    {
      id: "62e9c078-6537-417b-be59-1b404567f43b",
      username: "tsuthworth2",
      user_img: "https://robohash.org/corruptivoluptatumenim.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/dddddd/000000",
      caption: "Transgender Person",
    },
    {
      id: "e680944a-c542-4646-85be-dd1e39d6f0f4",
      username: "aedgson3",
      user_img: "https://robohash.org/eterrorodit.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
      caption: "Transsexual Person",
    },
    {
      id: "2d01e4f4-c7ac-4c0b-910e-6b3fbfa9d190",
      username: "dsaurin4",
      user_img: "https://robohash.org/nondistinctiovero.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Cis Woman",
    },
    {
      id: "020e53f2-7713-4ae1-a039-c581e7e42971",
      username: "athornally5",
      user_img: "https://robohash.org/minimamaximeeius.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Androgynous",
    },
    {
      id: "ecfbe0df-06b7-492e-9529-729d4b3ca3d1",
      username: "afelton6",
      user_img: "https://robohash.org/etminushic.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/cc0000/ffffff",
      caption: "Transsexual Man",
    },
    {
      id: "6f805a10-666e-449a-bfba-8c4798b106aa",
      username: "fclapp7",
      user_img: "https://robohash.org/voluptasquisuscipit.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Gender Fluid",
    },
    {
      id: "4412c936-d015-4e27-b38b-0890bf36b717",
      username: "krenish8",
      user_img: "https://robohash.org/utdoloribussed.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/cc0000/ffffff",
      caption: "Trans",
    },
    {
      id: "caa889de-ca48-46bb-b158-52cdbea98a4e",
      username: "valeksich9",
      user_img: "https://robohash.org/etaliquidnon.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/dddddd/000000",
      caption: "Transsexual",
    },
    {
      id: "4a5d9b78-600b-457b-8d88-3c0fc758c884",
      username: "dhallera",
      user_img: "https://robohash.org/etaliquamdolores.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Male to Female",
    },
    {
      id: "cfc323a9-7736-4e9d-977c-4965dbba84d6",
      username: "gschaumakerb",
      user_img: "https://robohash.org/laborumminusratione.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Trans Person",
    },
    {
      id: "87003341-5882-457c-a7a0-0a85d8ee8e40",
      username: "mchappellc",
      user_img: "https://robohash.org/aautaliquam.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Transmasculine",
    },
    {
      id: "b3f67e4f-7686-4169-bd8f-fdaa4304e1e2",
      username: "gstronoughd",
      user_img: "https://robohash.org/aspernaturvoluptatesat.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/dddddd/000000",
      caption: "Transsexual Person",
    },
    {
      id: "e1a3c883-d82d-4a75-970a-179d9ba65b07",
      username: "aakkere",
      user_img: "https://robohash.org/repudiandaetemporibusincidunt.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
      caption: "Transsexual Woman",
    },
    {
      id: "56878f43-0402-4603-ad72-407af099436e",
      username: "spiersef",
      user_img: "https://robohash.org/eosetsit.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/ff4444/ffffff",
      caption: "Gender Fluid",
    },
    {
      id: "cc8cd5a6-ecec-4651-ac68-4ca4b5a77a5d",
      username: "mrookebyg",
      user_img: "https://robohash.org/eumpariaturfuga.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
      caption: "Transgender Male",
    },
    {
      id: "6ea8e27d-c4bf-4d6a-be97-1111d02d6a3b",
      username: "aheasmanh",
      user_img: "https://robohash.org/fugaquiaeum.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/dddddd/000000",
      caption: "Transfeminine",
    },
    {
      id: "b6b9cf28-c2c4-47cf-91e2-a56a2b62e137",
      username: "crakesi",
      user_img: "https://robohash.org/debitissequifacilis.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
      caption: "FTM",
    },
    {
      id: "1531b527-62e2-43ec-84b6-d085d2c2cd4e",
      username: "lfroomj",
      user_img: "https://robohash.org/eumtemporibusfugit.png?size=400x400&set=set1",
      img: "http://dummyimage.com/x.png/cc0000/ffffff",
      caption: "Intersex",
    },
  ];
}

export default Posts;
