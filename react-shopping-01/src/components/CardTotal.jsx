import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({data}) => {
  const subTotal = data.reduce(
    (acc, data) =>
      data.price * data.amount * data.dampingRate + acc,
    0
  );
  
  
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal * taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">{(subTotal + shipping + taxRate * subTotal).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
