import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

var number1 = 0;
var number2 = 0;
var hoge = '';
var flag = 0;
var first = 1;

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
                hoge = `${number1}` + '7';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '8';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '9';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){flag = 4;first = 0;}
                if(flag == 1){console.log(number2 + number1);setCount(number2 + number1);number2 = number2 + number1;
                }else if(flag == 2){console.log(number2 - number1);setCount(number2 - number1);number2 = number2 - number1;
                }else if(flag == 3){console.log(number2 * number1);setCount(number2 * number1);number2 = number2 * number1;
                }else if(flag == 4){console.log(number2 / number1);setCount(number2 / number1);number2 = number2 / number1;}
                number1 = 0;
                flag = 4;
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '4';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '5';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '6';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){flag = 3;first = 0;}
                if(flag == 1){console.log(number2 + number1);setCount(number2 + number1);number2 = number2 + number1;
                }else if(flag == 2){console.log(number2 - number1);setCount(number2 - number1);number2 = number2 - number1;
                }else if(flag == 3){console.log(number2 * number1);setCount(number2 * number1);number2 = number2 * number1;
                }else if(flag == 4){console.log(number2 / number1);setCount(number2 / number1);number2 = number2 / number1;}
                number1 = 0;
                flag = 3;
              }}>
              <span className="select-none text-xl">*</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '1';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '2';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '3';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if(first == 1){flag = 2;first = 0;}
                if(flag == 1){console.log(number2 + number1);setCount(number2 + number1);number2 = number2 + number1;
                }else if(flag == 2){console.log(number2 - number1);setCount(number2 - number1);number2 = number2 - number1;
                }else if(flag == 3){console.log(number2 * number1);setCount(number2 * number1);number2 = number2 * number1;
                }else if(flag == 4){console.log(number2 / number1);setCount(number2 / number1);number2 = number2 / number1;}
                number1 = 0;
                flag = 2;
              }}>
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '.';
                number1 = Number(hoge);
                console.log(number1);
                setCount(number1);
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                hoge = `${number1}` + '0';
                number1 = Number(hoge);
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
                if(first == 1){flag = 1;first = 0;}
                if(flag == 1){console.log(number2 + number1);setCount(number2 + number1);number2 = number2 + number1;
                }else if(flag == 2){console.log(number2 - number1);setCount(number2 - number1);number2 = number2 - number1;
                }else if(flag == 3){console.log(number2 * number1);setCount(number2 * number1);number2 = number2 * number1;
                }else if(flag == 4){console.log(number2 / number1);setCount(number2 / number1);number2 = number2 / number1;}
                number1 = 0;
                flag = 1;
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-green-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                number1 = 0;
                number2 = 0;
                flag = 0;
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
