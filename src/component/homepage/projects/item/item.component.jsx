
export const Item = ({dataItem}) => {
    // console.log(getFieldSearchx.name);
    return(
        <div className="items">
            <div className="items__title">
                <span className="font-18 font-500 text-violet">Project {dataItem.id}</span> <br/>
                <span className="font-16 font-500 second-color"> // _{dataItem.name}</span>
            </div>
            <div className="items__view">
                <div className="items__view-img">
                    <img src={process.env.PUBLIC_URL + dataItem.img} />
                </div>
                <div className="items__view-content">
                    <div className="project-name">
                        <span className="font-18 font-500 second-color">{dataItem.desc}</span>
                    </div>
                    <button className="font-16 font-500 second-color">
                        <a href={dataItem.link} _blank>
                        view-project
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}