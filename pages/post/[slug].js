import React from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "../../service";
import {
  PostSingle,
  Comments,
  CommentsForm,
  PostWidget,
  Categories,
  Author,
} from "../../components";
const PostDetail = ({ post }) => {
  console.log(post);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section className="col-span-1 lg:col-span-8">
          <PostSingle post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments />
        </section>
        <section className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((cat) => cat.slug)}
            />
            <Categories />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostDetail;

export async function getStaticProps({ params }) {
  console.log(params);
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
