import getItem from '@/services/getItem';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const PostListPage = async () => {
  const { results } = await getItem();

  console.log(
    results.map((item) => {
      console.log('=========================');
      console.log(item);
    })
  );

  const category = new Set(
    results.map(({ properties }: any) => properties.category.select.name)
  );

  return (
    <div>
      {[...category.values()].map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default PostListPage;
