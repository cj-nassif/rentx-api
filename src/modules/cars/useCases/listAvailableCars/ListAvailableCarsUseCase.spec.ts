import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 160.0,
      license_plate: "ABC-2134",
      fine_amount: 120,
      brand: "Car_brand",
      category_id: "Category_id1",
    });
    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 160.0,
      license_plate: "ABC-2134",
      fine_amount: 120,
      brand: "Car_brand_test",
      category_id: "Category_id1",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Cars_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description 2",
      daily_rate: 110.0,
      license_plate: "ABC-2143",
      fine_amount: 100,
      brand: "Car_brand_test_2",
      category_id: "Category_id2",
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car description 3",
      daily_rate: 110.0,
      license_plate: "ABC-2198",
      fine_amount: 100,
      brand: "Car_brand_test_3",
      category_id: "12345",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
