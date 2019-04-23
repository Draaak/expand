export type Item = {
  id: number;
  name: string;
}

export class Store {
  public fetchMenuItems(): Promise<Item[]> {
    return fetch('/v2/fields?client_id=BehanceWebSusi1', {
      mode: "cors",
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    })
    .then(this.status)
    .then(this.transformMenuItems);
  }
  
  public fetchGridItems(menuItem: Item): Promise<Item[]> {
    return fetch(`/v2/projects?field=${menuItem.name}&client_id=BehanceWebSusi1`, {
      mode: "cors",
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    })
    .then(this.status)
    .then(this.transformGridItems);
  }
  
  private status(response: any): Promise<any> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  private transformMenuItems(response: any): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      response.json()
      .then((data: any) => {
        resolve(data.fields);
      }, () => {
        reject('TODO: handle errors !!!');
      });
    })
  }

  private transformGridItems(response: any): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      response.json()
      .then((data: any) => {
        resolve(data.projects);
      }, () => {
        reject('TODO: handle errors !!!');
      });
    })
  }
}
