export const Icon = () => {
    return (
        <div>
             <ul>
                <li>
                    <img src={process.env.PUBLIC_URL + "/img/sb1.png"} />
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + "/img/sb2.png"} />
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + "/img/sb3.png"} />
                </li>
            </ul>
        </div>
    )
}