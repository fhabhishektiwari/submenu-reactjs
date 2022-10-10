import SidebarItems from "./SidebarItems";
import items from '../data/sidebar.json'


export default function Sidebar(){
    return(
        <div className="sidebar">
            {items.map((item,index)=><SidebarItems key={index} item={item}/>)}
        </div>
    );
}