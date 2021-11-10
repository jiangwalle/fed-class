import { Routes, Route, Link } from "react-router-dom";
import TodoItem from "./components/TodoItem.js";
import Card from './components/Card';
import StyleExample from "./style-example/StyleExample.js";
import ButtonClassComponent from "./class-function-component/ButtonClassComponent.js";
import ThemeEditor from "./class-function-component/ThemeEditor.js";
import Clock from "./class-function-component/Clock.js";
import WorldClock from "./class-function-component/WorldClocks.js";
import LifeCycleExample from "./class-function-component/LifeCycleExample.js";
import LifeCycleExampleDad from "./class-function-component/LifeCycleExampleDad.js";
import EventExample from "./class-function-component/EventExample.js";
import ListExample from "./list/ListExample.js";
import FormExample from "./form/FormExample.js";
import Exchange from "./CurrencyExachange/Exchange.js";
import Container from "./routes-mock/Container.js";

function App() {
  // const todos = ['Wath Movie', 'Walk dogs', 'Have dinner'];
  return (
    <div>
      {/* <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItem text={todo}></TodoItem>
        })}
      </ul>
      <hr />
      <button id="test" disabled>23423</button>
      <Card imageUrl="https://picsum.photos/200/250" title="幸福来敲门" createdAt="一天前" rating="暂无评分"></Card>
      <Card imageUrl="" title="钢铁侠" createdAt="三天前" rating="8.6"></Card>

      <hr/>
      <StyleExample/> */}

      {/* <hr/>
      <h2>Function component vs Class component</h2>
      <ButtonClassComponent size="small">Small Button</ButtonClassComponent>
      <ButtonClassComponent size="default">Default Button</ButtonClassComponent>
      <ButtonClassComponent size="large">Large Button</ButtonClassComponent>
      <ButtonClassComponent>Button without size</ButtonClassComponent> */}

      {/* <ThemeEditor theme="light" /> */}
      {/* <WorldClock /> */}
      {/* <LifeCycleExample /> */}
      {/* <LifeCycleExampleDad /> */}
      {/* <EventExample /> */}
      {/* <ListExample /> */}
      {/* <FormExample/> */}
      {/* <Exchange /> */}
      {/* <Container /> */}

      <div className="navbar">
        <Link to="/">Currency Exchange</Link>
        <Link to="/about">Form Example</Link>
        <Link to="/event">Event Example</Link>
      </div>

      <Routes>
        <Route path="/" element={<Exchange/>} />
        <Route path="about" element={<FormExample/>} />
        <Route path="event" element={<EventExample/>} />
      </Routes>
    </div>
  );
}

export default App;
