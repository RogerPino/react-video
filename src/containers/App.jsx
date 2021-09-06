import React from "react";
import useInitialState from "../hooks/useInitialState";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1> Loading ...</h1>
  ) : (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length === 0 ? (
        <Categories title="Mi Lista">
          <div style={{ textAlign: "center" }}>
            <h1> No hay nada que guardado en tu lista</h1>
          </div>
        </Categories>
      ) : (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item}></CarouselItem>
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals <= 0 ? (
            <h1>No hay nada disponible </h1>
          ) : (
            initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item}>
                {" "}
              </CarouselItem>
            ))
          )}
        </Carousel>
        <Footer />
      </Categories>
    </div>
  );
};

export default App;
