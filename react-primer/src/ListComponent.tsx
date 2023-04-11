export function BulletedList() {
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
  return <li>{props.itemName}</li>;
}
