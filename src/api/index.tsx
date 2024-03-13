const API_URL = "https://65c53ee5dae2304e92e41ae7.mockapi.io/api/todos/";

export async function getData() {
  const result = await fetch(API_URL);

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

export async function addData(data: IAddTodoItemData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to add data");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function updateData(todoID: number, data: ITodoItem) {
  try {
    const response = await fetch(API_URL + `${todoID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteData(todoID: number) {
  try {
    const response = await fetch(API_URL + `${todoID}`, {
      method: "Delete",
    });

    if (!response.ok) {
      throw new Error("Failed to remove data");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function dropData(todoID: number, data: ITodoItem) {
  try {
    const response = await fetch(API_URL + `${todoID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
