import { useEffect, useState } from 'react';
import { ToggleButtonGroup } from 'react-bootstrap';
import BDCheckbox from './components/BDCheckbox';
import Layout from './layouts/Layout';

function App () {
  const data = [
    {
      id: 1,
      name: 'R',
      value: 'R',
      checked: false
    },
    {
      id: 2,
      name: '250 gr',
      value: '250 gr',
      checked: false
    }
  ];

  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    setInputValue(data);
  }, []);

  // const checkHandler = (e) => {
  //   // console.log(e.target.name);
  //   inputValue.forEach((item, index) => {
  //     if (item.id === e.name) {
  //       setInputValue(prevState => {
  //         prevState[index].checked = !prevState[index].checked;
  //         return [...prevState];
  //       });
  //       console.log(inputValue);
  //     }
  //     // console.log(item, e.target.name);
  //   });
  // };

  const changeHandler = (e) => {
    setInputValue(e);
    console.log(e);
  };

  return (
    <Layout notUseNavbar={true}>
      <ToggleButtonGroup type='checkbox' value={inputValue} onChange={changeHandler} >
        {
          inputValue.map((item, index) => {
            return (
              <BDCheckbox
                key={index}
                label={item.name}
                name={item.id}
                id={item.id}
                type="checkbox"
                // variant="circle"
                className="mx-2"
              />
            );
          })
        }
      </ToggleButtonGroup>
    </Layout>
  );
}

export default App;
