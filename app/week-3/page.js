import ItemList from "./item-list";

export default function App(){
    return(
        <div className="max-w-md p-3">
            <h1 className="text-4xl font-bold mb-2">Shopping List</h1>
            <ItemList />
        </div>
    );
}