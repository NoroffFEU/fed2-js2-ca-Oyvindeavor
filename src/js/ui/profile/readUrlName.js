

export function readUrlName() {
    const url = new URL(window.location.href);
    const name = url.searchParams.get("username");
    console.log(name);
    return name;
  }
  