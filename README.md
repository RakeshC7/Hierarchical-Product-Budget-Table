<img src="https://github.com/RakeshC7/Hierarchical-Product-Budget-Table/HierarchicalTableSS.png" alt="Hierarchical Product Budget Demo Image" align="center" />

# Hierarchical Product Budget Table

React app for hierarchical product Budget and live variance tracking.

## Sample Data
```bash
{
  "rows": [
    {
      "id": "electronics",
      "label": "Electronics",
      "value": 1400, //this value needs to be calculated from the children values (800+700)
      "children": [
        {
          "id": "phones",
          "label": "Phones",
          "value": 800
        },
        {
          "id": "laptops",
          "label": "Laptops",
          "value": 700
        }
      ]
    },
    {
      "id": "furniture",
      "label": "Furniture",
      "value": 1000, //this need to be calculated from the children values (300+700)
      "children": [
        {
          "id": "tables",
          "label": "Tables",
          "value": 300
        },
        {
          "id": "chairs",
          "label": "Chairs",
          "value": 700
        }
      ]
    }
  ]
}
```

## Folder Structure
<pre lang="markdown"><code>
src/
├── components/
│ ├── ui/
| |    ├── Badge.jsx
│ |    ├── Button.jsx
│ |    ├── Card.jsx
| |    └── input.jsx
│ ├── table/
| |    ├── HierarchicalTable.jsx
│ |    ├── TableFooter.jsx
│ |    ├── TableFooter.jsx
| |    └── TableRow.jsx
│ └── allocation/
│      ├── AllocationInput.jsx
|      └── VarianceDisplay.jsx
├── context/
│    └── TableContext.jsx
├── hooks/
│    └── useHierarchicalData.jsx
├── utils/ 
│    └── calculations.jsx
└── App.jsx
</code></pre>

## Example
- Update "Phones" by +10% → auto-updates subtotal for "Electronics"
- Directly set "Furniture" to 2000 → redistributes values to "Tables" and "Chairs" proportionally


## Features
- Nested table with expandable rows
- Value allocation by percentage or direct entry
- Auto subtotal + grand total recalculation
- Variance shown as percentage change

## Build with
- React
- TailwindCSS
- Context API
- Lucide-react icons

## Setup

```bash
npm install
npm run dev
```
