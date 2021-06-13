import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { StyledMain, StyledCard, StyledIconButton } from './MainView.styled';
import Typography from '@material-ui/core/Typography';
import { MyCard } from 'components';

const MainView = () => {
  // I. Get & Create Data
  const { pathname } = useLocation();
  const mems_data = useSelector((state) => state.memReducer);
  const [state, setState] = useState([]);
  // II. Filter Fake DB
  const getData = useCallback(
    (data) => {
      switch (pathname) {
        case '/hot':
          return data.filter(
            ({ upvotes, downvotes }) => upvotes - downvotes > 5
          );
        case '/regular':
          return data.filter(
            ({ upvotes, downvotes }) => upvotes - downvotes <= 5
          );
        default:
          return data;
      }
    },
    [pathname]
  );
  // III. Mount Get Data Func
  useEffect(() => {
    const results = getData(mems_data);
    setState(results);
  }, [getData, mems_data]);
  // IV. Return Main Component
  return (
    <StyledMain>
      {pathname === '/' && (
        <StyledCard>
          <StyledIconButton aria-label='add_mem'>
            <AddCircleOutlineOutlinedIcon />
          </StyledIconButton>
          <Typography variant={'h6'} gutterBottom>
            Add New Mem
          </Typography>
        </StyledCard>
      )}
      {state.map((mem_data) => {
        const { uuid } = mem_data;
        return <MyCard key={uuid} data={mem_data} />;
      })}
    </StyledMain>
  );
};

export default MainView;
