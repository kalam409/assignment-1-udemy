import './App.css'
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    { id: "e2", title: "New TV", amount: 799.49, desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <div className="App">
      <Expenses 
      title={expenses[0].title}
      amount={expenses[0].amount}
      desc={expenses[0].desc}
      />
      <Expenses 
      title={expenses[1].title}
      amount={expenses[1].amount}
      desc={expenses[1].desc}
      />
      <Expenses 
      title={expenses[2].title}
      amount={expenses[2].amount}
      desc={expenses[2].desc}
      />
      <Expenses 
      title={expenses[3].title}
      amount={expenses[3].amount}
      desc={expenses[3].desc}
      />
    </div>
  )
}

export default App
