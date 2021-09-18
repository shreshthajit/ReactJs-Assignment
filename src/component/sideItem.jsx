export const SideItem = (props) => {
    return(
        <div className="item p-2 side-nav-item">
           <props.logo className="mx-2" href="#"/>
           {props.name}
        </div>
    );
};