import React from 'react';
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getHeapSortAnimations,
  getBubbleSortAnimations,
} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
import {Button} from 'react-bootstrap';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      NUMBER_OF_ARRAY_BARS: 5,
      isRunning: false,
    };

    this.handleSlider = this.handleSlider.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    if (!this.state.isRunning) {
      const array = [];
      for (let i = 0; i < this.state.NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(10, 300));
      }
      this.setState({array});
    }
  }

  handleSlider(event) {
    if (!this.state.isRunning) {
      event.preventDefault();
      const value = event.target.value;
      this.setState(
        {
          NUMBER_OF_ARRAY_BARS: value,
        },
        () => {
          this.resetArray();
        },
      );
    }
  }

  toggleIsRunning() {
    this.setState({isRunning: !this.state.isRunning});
  }

  mergeSort() {
    if (!this.state.isRunning) {
      this.toggleIsRunning();
      setTimeout(() => {
        const animations = getMergeSortAnimations(this.state.array);
        animations.push('e');
        for (let i = 0; i < animations.length; i++) {
          if (animations[i] === 'e') {
            setTimeout(() => {
              this.toggleIsRunning();
            }, i * ANIMATION_SPEED_MS);
          } else {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
        }
      }, 10);
    }
  }

  quickSort() {
    if (!this.state.isRunning) {
      this.toggleIsRunning();
      setTimeout(() => {
        const animations = getQuickSortAnimations(this.state.array);
        animations.push('e');
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 < 2;
          if (animations[i] === 'e') {
            setTimeout(() => {
              this.toggleIsRunning();
            }, i * ANIMATION_SPEED_MS);
          } else {
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
        }
      }, 100);
    }
  }

  heapSort() {
    if (!this.state.isRunning) {
      this.toggleIsRunning();
      setTimeout(() => {
        const animations = getHeapSortAnimations(this.state.array);
        animations.push('e');
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 < 2;
          if (animations[i] === 'e') {
            setTimeout(() => {
              this.toggleIsRunning();
            }, i * ANIMATION_SPEED_MS);
          } else {
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
        }
      }, 100);
    }
  }

  bubbleSort() {
    if (!this.state.isRunning) {
      this.toggleIsRunning();
      setTimeout(() => {
        const animations = getBubbleSortAnimations(this.state.array);
        animations.push('e');
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 < 2;
          if (animations[i] === 'e') {
            setTimeout(() => {
              this.toggleIsRunning();
            }, i * ANIMATION_SPEED_MS);
          } else {
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS * 5);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS * 5);
            }
          }
        }
      }, 100);
    }
  }

  render() {
    console.log('this.state >>>', this.state);
    const {array} = this.state;

    return (
      <div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}></div>
          ))}
          <div className="button-container">
            <Button
              variant="warning"
              size="lg"
              onClick={() => this.resetArray()}>
              Generate New Array
            </Button>{' '}
            <Button
              variant="success"
              size="lg"
              onClick={() => this.mergeSort()}>
              Merge Sort
            </Button>{' '}
            <Button
              variant="info"
              size="lg"
              onClick={() => this.quickSort()}>
              Quick Sort
            </Button>{' '}
            <Button
              variant="primary"
              size="lg"
              onClick={() => this.heapSort()}>
              Heap Sort
            </Button>{' '}
            <Button
              variant="danger"
              size="lg"
              onClick={() => this.bubbleSort()}>
              Bubble Sort
            </Button>{' '}
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min="2"
              max="192"
              step="10"
              className="slider"
              value={this.state.NUMBER_OF_ARRAY_BARS}
              onChange={this.handleSlider}
            />
            Drag The Green Square To Increase/Decrease Bars
          </div>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
