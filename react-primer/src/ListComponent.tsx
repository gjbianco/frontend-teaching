export function BulletedList() {
  // this function is called every time a BulletedList component instance needs to be re-rendered
  return (
    <div>
      <h1>Bulleted List</h1>
      <ul>
        <ListItem itemName="First" />
        <ListItem itemName="Second" />
        <ListItem itemName="Third" />
        <ListItem itemName="Fourth" />
      </ul>
    </div>
  );
}

function ListItem(props: { itemName: string }) {
  // because this function is called repeatedly, we can't do something like this to store state!
  const name = props.itemName;

  return <li>{name}</li>;
}
