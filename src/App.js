import "./App.css";
import Header from "./Header/Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { Data } from "./Data/Data";
import Card from "./Card/Card";

function App() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState([]);
    console.log(search);
    console.log(category, "category");
    useEffect(() => {
        alanBtn({
            key: "22809a1a85e9234a6eda030ef46ecd0d2e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: ({ command, product }) => {
                if (command === "show") {
                    filter(product);
                }
            },
        });
        filter("");
    }, []);

    const filter = (names) => {
        const filtered = Data.filter((item) => item.name.includes(names));
        console.log(filtered);
        setCategory(filtered);
    };

    return (
        <div className="container">
            <Header search={search} setSearch={setSearch} />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {category
                    .filter((item) =>
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                        <Card
                            key={index}
                            image={item.image}
                            name={item.name}
                            rating={item.rating}
                            actualPrice={item.actualPrice}
                            offerPrice={item.offerPrice}
                        />
                    ))}
            </div>
        </div>
    );
}
export default App;
