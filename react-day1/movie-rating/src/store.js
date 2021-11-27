import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import movieSlice from './slices/movieSlice';

// 第1步：创建redux store
export default configureStore({
  reducer: {
    // 第4步： 把slice中的reducer跟store关联起来。这样，reducer里的处理结果才会被放入到store之中。
    counter: counterReducer,
    movie: movieSlice,
  },
});
