import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const { carList, cnt } = await this.getInput();
    const cars = carList.map((name) => ({ name, position: 0 }));

    Console.print("\n실행 결과");
    for (let i = 0; i < cnt; i++) {
      this.moveCars(cars);
      this.PositionsPrint(cars);
    }
  }

  // 입력 받기
  async getInput() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carList = cars.split(",");
    const cnt = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
    return { carList, cnt };
  }

  // 자동차 전진 여부 결정
  moveCars(cars) {
    cars.forEach((car) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        car.position += 1;
      }
    });
  }

  // 경주 결과 출력
  PositionsPrint(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }
}

export default App;
