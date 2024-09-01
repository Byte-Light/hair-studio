import React from 'react';

export const priceItems = [
  {
    title: 'HAIR TREATMENTS',
    content: (
      <div>
        <p>
          Pamper your hair with one of our luxurious treatments. From £40 for
          a basic conditioning treatment to £300 for an intensive repair
          therapy, we have something to suit all hair types and needs. Our
          treatments use the latest products and techniques to leave your hair
          looking and feeling its best. Book now to transform your hair!
        </p>
        <table className="mt-4 w-full border border-gray-300">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="p-2 text-left">Treatment</th>
              <th className="p-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr>
              <td className="p-2 border-t">Kerastase Fusio-Dose Prescriptive Treatment</td>
              <td className="p-2 border-t text-right">£16</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Olaplex Strengthening Treatment (Stand Alone Treatment or Mixed With Colour)</td>
              <td className="p-2 border-t text-right">£25</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Olaplex Strengthening Treatment With Kerastase Fusio-Dose</td>
              <td className="p-2 border-t text-right">£37</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Olaplex 'Take Home' Treatment</td>
              <td className="p-2 border-t text-right">£31.95</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Keratin Shot (Hair Smoothing Booster Treatment)</td>
              <td className="p-2 border-t text-right">£33</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: 'STYLING',
    content: (
      <div>
        <p>
          Our salon offers a range of cut and finish styles to suit all hair
          types. Prices start from £40 for a basic cut and blow-dry, and go up
          to £300 for a deluxe treatment, including a cut, color, and finish.
          All services are performed by experienced stylists using high-quality
          products. Book now for a new look!
        </p>
        <table className="mt-4 w-full border border-gray-300">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-right">Stylist</th>
              <th className="p-2 text-right">Senior Stylist</th>
              <th className="p-2 text-right">Principal Stylist</th>
              <th className="p-2 text-right">Director</th>
              <th className="p-2 text-right">Salon Director</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr>
              <td className="p-2 border-t">Ladies Cut & Finish</td>
              <td className="p-2 border-t text-right">£43</td>
              <td className="p-2 border-t text-right">£53</td>
              <td className="p-2 border-t text-right">£63</td>
              <td className="p-2 border-t text-right">£73</td>
              <td className="p-2 border-t text-right">£83</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Ladies Re-Style</td>
              <td className="p-2 border-t text-right">£83</td>
              <td className="p-2 border-t text-right">£103</td>
              <td className="p-2 border-t text-right">£113</td>
              <td className="p-2 border-t text-right">£123</td>
              <td className="p-2 border-t text-right">£133</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Gents Cut & Finish</td>
              <td className="p-2 border-t text-right">£143</td>
              <td className="p-2 border-t text-right">£153</td>
              <td className="p-2 border-t text-right">£163</td>
              <td className="p-2 border-t text-right">£173</td>
              <td className="p-2 border-t text-right">£183</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Gents c/homme</td>
              <td className="p-2 border-t text-right">£193</td>
              <td className="p-2 border-t text-right">£203</td>
              <td className="p-2 border-t text-right">£213</td>
              <td className="p-2 border-t text-right">£223</td>
              <td className="p-2 border-t text-right">£233</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Gents Re-Style</td>
              <td className="p-2 border-t text-right">£243</td>
              <td className="p-2 border-t text-right">£253</td>
              <td className="p-2 border-t text-right">£263</td>
              <td className="p-2 border-t text-right">£273</td>
              <td className="p-2 border-t text-right">£283</td>
            </tr>
            <tr>
              <td className="p-2 border-t">Perm</td>
              <td className="p-2 border-t text-right">£293</td>
              <td className="p-2 border-t text-right">£303</td>
              <td className="p-2 border-t text-right">£313</td>
              <td className="p-2 border-t text-right">£323</td>
              <td className="p-2 border-t text-right">£333</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];
