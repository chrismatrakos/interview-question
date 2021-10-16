
## Exercise
Our team needs to build an API that can provide full text search over all the attributes in a given dataset.

Our priority is to ensure that the API has as close to 100% uptime as we can and to make sure that it can respond to requests in under 500ms.

We need to make sure that it is tested in an automated way and that we have thought how the API would perform once the volumes of data increase.

Data will be regularly updated during the day in the form of new json files and the API needs to serve the latest available content.


## Resources
There is an example dataset that we have been given found in [data.json](./data.json) that should be used to assist with the development.

There is an [openapi.json](./openapi.json) which is the specification that the API must conform to. It is based on [OpenAPI](https://en.wikipedia.org/wiki/OpenAPI_Specification).

## Exercise
Build an API in your chosen programming language which meets the specification.

There are a few examples included to help

### Example 1
```bash
curl localhost:8080/v1/search?attribute=subject&value=missing
```

```bash
[
  {
    "id": 1,
    "type": "incident",
    "subject": "Cargo Missing",
    "description": "Nostrud ad sit velit cupidatat laboris ipsum nisi amet laboris ex exercitation amet et proident. Ipsum fugiat aute dolore tempor nostrud velit ipsum.",
    "priority": "high",
    "status": "pending"
  }
]
```

### Example 2
```bash
curl localhost:8080/v1/search?attribute=priority&value=high
```

```bash
[
  {
    "id": 1,
    "type": "incident",
    "subject": "Cargo Missing",
    "description": "Nostrud ad sit velit cupidatat laboris ipsum nisi amet laboris ex exercitation amet et proident. Ipsum fugiat aute dolore tempor nostrud velit ipsum.",
    "priority": "high",
    "status": "pending"
  },
  {
    "id": 3,
    "type": "incident",
    "subject": "Payment Sent Error",
    "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    "priority": "high",
    "status": "pending"
  }
]

```

## Submitting
We would prefer that a Github link (public or private) be provided with your solution, however a zip archive is also acceptable.
