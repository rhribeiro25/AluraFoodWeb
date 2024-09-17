import NavBar from '../../components/navBar';
import Rodape from '../../components/footer';
import CustomDataGrid from '../../components/dataGrid';
import OrderService from '../../service/orderService';
import { useEffect, useState } from 'react';

function ShowcaseOrders() {

  const [props, setProps] = useState<{}>()

  useEffect(() => {
    (async () => {
      try {
        const props = await OrderService.getDataGridProps();
        setProps(props);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <NavBar />
      <CustomDataGrid {...props} />
      <Rodape />
    </>
  );
}

export default ShowcaseOrders;
