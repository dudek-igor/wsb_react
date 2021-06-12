import { StyledMain } from './View.styled';
import Card from '../card/Card';

const fake_db = [
  {
    uuid: '8f973f9e-e3c6-4bb6-999e-f452e7f04d6e',
    title: 'Javascript', // title
    mem_image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/cover-photo.png', //url
    added_datetime: '2021-06-12T16:35:45.881Z', // iso
    top: false, // star - true/false
    upvotes: 0,
    downvotes: 0,
  },
  {
    uuid: '8f973f9e-e3c6-4bb6-999e-f452e7f04d6e',
    title: 'Typescript', // title
    mem_image:
      'https://www.meme-arsenal.com/memes/e3cf12860859b7a69c445defa5887ba0.jpg',
    added_datetime: '2021-05-03T06:54:45.881Z',
    top: true,
    upvotes: 0,
    downvotes: 0,
  },
  {
    uuid: '8f973f9e-e3c6-4bb6-999e-f452e7f04d6a',
    title: 'React',
    mem_image: 'https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png',
    added_datetime: '2021-06-01T18:01:45.881Z',
    top: true,
    upvotes: 5,
    downvotes: 2,
  },

  {
    uuid: '8f973f9e-e3c6-4bb6-999e-f452e7f04d6c',
    title: 'Node',
    mem_image: 'https://img.devrant.com/devrant/rant/r_123356_Gnftu.jpg',
    added_datetime: '2021-02-09T14:12:45.881Z',
    top: false,
    upvotes: 5,
    downvotes: 2,
  },
  {
    uuid: '8f973f9e-e3c6-4bb6-999e-f452e7f04d4a',
    title: 'React',
    mem_image:
      'https://www.meme-arsenal.com/memes/d4430e6f3f4df494020c4a7b03b0f259.jpg',
    added_datetime: '2021-06-12T09:36:45.881Z',
    top: false,
    upvotes: 5,
    downvotes: 2,
  },
  {
    uuid: '8f973f9e-e3c6-4bb6-999e-f452e7f04d3a',
    title: 'PHP',
    mem_image:
      'https://gbksoft.com/blog/wp-content/uploads/2020/07/5Xjj4bC-480x308.jpg',
    added_datetime: '2021-04-14T22:35:45.881Z',
    top: false,
    upvotes: 5,
    downvotes: 2,
  },
];

const View = () => {
  return (
    <StyledMain>
      {fake_db.map((mem_data) => {
        const { uuid } = mem_data;
        return <Card key={uuid} data={mem_data} />;
      })}
    </StyledMain>
  );
};

export default View;
