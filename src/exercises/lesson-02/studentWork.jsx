//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import MySnackHeader from './SnackHeader.jsx';
import MySnackList from './SnackList.jsx';
import MySnackFooter from './SnackFooter.jsx';

export default function StudentWork() {
  return (
    <div>
      <MySnackHeader />
      <MySnackList />
      <MySnackFooter />

      <p> Student output will go here</p>
    </div>
  );
}
