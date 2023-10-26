import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const [number1, setNumber1] = useState<number>(0);
const [number2, setNumber2] = useState<number>(0);
const [hoge, setHoge] = useState<string>('');
const [flag, setFlag] = useState<number>(0);
const [first, setFirst] = useState<number>(1);


const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<number>(0);

  //const [labourHours, setLabourHours] = useState<string>('0');

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{count}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
          <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '7');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '8');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '9');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){setFlag(4);}
                if(flag == 1){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 + number1)};
                }else if(flag == 2){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 - number1)};
                }else if(flag == 3){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 * number1)};
                }else if(flag == 4){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 / number1)}};
                console.log(number2);
                setCount(number2);
                setNumber1(0);
                setFlag(4);
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '4');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '5');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '6');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){setFlag(3);}
                if(flag == 1){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 + number1)};
                }else if(flag == 2){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 - number1)};
                }else if(flag == 3){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 * number1)};
                }else if(flag == 4){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 / number1)}};
                console.log(number2);
                setCount(number2);
                setNumber1(0);
                setFlag(3);
              }}>
              <span className="select-none text-xl">*</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '1');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '2');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '3');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){setFlag(2);}
                if(flag == 1){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 + number1)};
                }else if(flag == 2){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 - number1)};
                }else if(flag == 3){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 * number1)};
                }else if(flag == 4){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 / number1)}};
                console.log(number2);
                setCount(number2);
                setNumber1(0);
                setFlag(2);
              }}>
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '.');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setHoge(`${number1}` + '0');
                setNumber1(Number(hoge));
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                if(flag == 1){setCount(number2 + number1);
                }else if(flag == 2){setCount(number2 - number1);
                }else if(flag == 3){setCount(number2 * number1);
                }else if(flag == 4){setCount(number2 / number1);}
                
              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){setFlag(1);}
                if(flag == 1){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 + number1)};
                }else if(flag == 2){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 - number1)};
                }else if(flag == 3){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 * number1)};
                }else if(flag == 4){
                  if(first == 1){setNumber2(number1);setFirst(0);
                  }else{setNumber2(number2 / number1)}};
                console.log(number2);
                setCount(number2);
                setNumber1(0);
                setFlag(1);
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-green-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setNumber1(0);
                setNumber2(0);
                setFlag(0);
                setFirst(1);
                setCount(0);
              }}>
              <span className="select-none text-xl">C</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
