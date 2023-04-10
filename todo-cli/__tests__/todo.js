/* eslint-disable no-undef */
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    // clear any existing todos before adding new ones
    all.forEach((todo, index) => {
      all.splice(index, 1);
    });

    add({
      title: "Test Todo 1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    add({
      title: "Test Todo 2",
      completed: true,
      dueDate: new Date("2023-05-01").toLocaleDateString("en-CA"),
    });
    add({
      title: "Test Todo 3",
      completed: false,
      dueDate: new Date("2023-04-01").toLocaleDateString("en-CA"),
    });
    add({
      title: "Test Todo 4",
      completed: false,
      dueDate: new Date("2023-04-10").toLocaleDateString("en-CA"),
    });
    add({
      title: "Test Todo 5",
      completed: false,
      dueDate: new Date("2023-04-15").toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "New Test Todo",
      completed: false,
      dueDate: new Date("2023-04-20").toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
    expect(all[all.length - 1].title).toBe("New Test Todo");
  });

  test("Should mark a todo as complete", () => {
    const todoIndex = 0;
    expect(all[todoIndex].completed).toBe(false);
    markAsComplete(todoIndex);
    expect(all[todoIndex].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(2);
    expect(overdueItems[0].title).toBe("Test Todo 3");
    expect(overdueItems[1].title).toBe("Test Todo 4");
  });

  test("Should retrieve due today items", () => {
    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Test Todo 1");
  });

  test("Should retrieve due later items", () => {
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(2);
    expect(dueLaterItems[0].title).toBe("Test Todo 2");
    expect(dueLaterItems[1].title).toBe("Test Todo 5");
  });
});
