import { Client } from '@notionhq/client';

const getItem = async () => {
  const notionKey = process.env.NEXT_PUBLIC_NOTION_KEY;
  const databaseKey = process.env.NEXT_PUBLIC_NOTION_DATABASE_KEY;

  const notionClient = new Client({ auth: notionKey });

  const response = await notionClient.databases.query({
    database_id: databaseKey!,
  });
  return response;
};

export default getItem;

/** 
 * {
  category: {
    id: 'ozrV',
    type: 'select',
    select: {
      id: 'c163a9a3-64e9-4dbf-80d7-5b58f44fa75b',
      name: '프론트엔드',
      color: 'blue'
    }
  },
  status: {
    id: 'sJj%5C',
    type: 'status',
    status: {
      id: 'b5780982-04cd-401d-be21-50453dc7ef77',
      name: 'Not started',
      color: 'default'
    }
  },
  tag: { id: 'u%7BI%7D', type: 'multi_select', multi_select: [] },
  title: { id: 'title', type: 'title', title: [ [Object] ] }
}
 * 

{
  object: 'page',
  id: string,
  created_time: string,
  last_edited_time: string,
  created_by: { object: 'user', id: '1c23a479-d6dc-4c17-a240-67408e56fb9b' },
  last_edited_by: { object: 'user', id: '1c23a479-d6dc-4c17-a240-67408e56fb9b' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: '987a9318-eeac-4c5e-87d4-ac76984913b4'
  },
  archived: false,
  properties: {
    category: { id: 'ozrV', type: 'select', select: [Object] },
    status: { id: 'sJj%5C', type: 'status', status: [Object] },
    tag: { id: 'u%7BI%7D', type: 'multi_select', multi_select: [] },
    title: { id: 'title', type: 'title', title: [] }
  },
  url: string
}
 * */
