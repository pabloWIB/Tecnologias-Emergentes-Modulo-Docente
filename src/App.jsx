import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import StudentsProvider from 'context/StudentsProvider';
import TeachersProvider from 'context/TeachersProvider';

const App = () => (
  <ThemeCustomization>
    <StudentsProvider>
      <TeachersProvider>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </TeachersProvider>
    </StudentsProvider>
  </ThemeCustomization>
);

export default App;
