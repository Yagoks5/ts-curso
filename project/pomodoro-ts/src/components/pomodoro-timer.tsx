import { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../hooks/use-interval';
import Button from './button';
import Timer from './timer';
import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';
import secondsToMinutes from '../utils/seconds-to-minutes';

const audioStartWorking = new Audio(bellStart);
const audioFinishWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles).fill(true),
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    props.pomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
      setMainTime(long ? props.longRestTime : props.shortRestTime);
      audioFinishWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    }
    if (resting) {
      document.body.classList.remove('working');
    }
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(props.cycles).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) {
      setNumberOfPomodoros(numberOfPomodoros + 1);
    }

    if (resting) {
      configureWork();
    }
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    completedCycles,
    numberOfPomodoros,
    props.cycles,
    configureRest,
    configureWork,
  ]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) {
        setFullWorkingTime(fullWorkingTime + 1);
      }
    },
    timeCounting ? 1000 : null,
  );

  return (
    <>
      <div className="pomodoro">
        <h2>Você está {working ? 'Trabalhando' : 'Descansando'}</h2>
        <Timer mainTime={mainTime}></Timer>
        <div className="controls">
          <Button
            text="Work"
            onClick={() => {
              configureWork();
            }}
          />
          <Button
            text="Rest"
            onClick={() => {
              configureRest(false);
            }}
          />
          <Button
            className={!working && !resting ? 'hidden' : ''}
            text={timeCounting ? 'Pause' : 'Play'}
            onClick={() => {
              setTimeCounting(!timeCounting);
            }}
          />
        </div>
        <div className="details">
          <p>Ciclos concluidos: {completedCycles}</p>
          <p>Tempo total de trabalho: {secondsToMinutes(fullWorkingTime)}</p>
          <p>Número de Pomodoros: {numberOfPomodoros}</p>
        </div>
      </div>
    </>
  );
}
