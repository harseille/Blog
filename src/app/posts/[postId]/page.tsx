import { notFound } from 'next/navigation';

type Props = {
  params: {
    postId: string;
  };
};

const PostPage = async ({ params: { postId } }: Props) => {
  // const post = getPost(postId);

  // if (!post) notFound();

  return <div>{postId}</div>;
};

// export const generateStaticParams = async () => {
//   const products = await getProducts();

//   return products.map((product) => ({
//     slug: product.id,
//   }));
// };

export default PostPage;
