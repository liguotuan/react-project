import uniqueId from 'lodash/uniqueId';
import ListItem from './list-item';
export default function List(props) {
  const listData = [
    {
      name: 'qaq',
      age: 10,
      message: 'xixi的爱'
    },
    {
      name: 'qaq',
      age: 10,
      message: 'haha的爱'
    },
    {
      name: 'qaq',
      age: 10,
      message: '嘻嘻与哈哈'
    },
  ]
  return (
    <div className="tw-w-[800px] tw-h-full">
      { listData.map(item => <ListItem user={ item } key={ uniqueId(item.name) }></ListItem>) }
    </div>
  );
}