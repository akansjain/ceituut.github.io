export default function Professors({ professors }) {
  return (
    <table>
      <thead>
        <tr>
          <th>استاد</th>
          <th>راه ارتباطی</th>
        </tr>
      </thead>
      <tbody>
        {/* {% for item in site.data.professors %} */}
        <tr>
          <td>{item.name}</td>
          <td>
            {/* {% for contact in item.contact %}
                        {% assign contact_type = contact | split: ":" | first %} */}
            <a href="{{ contact }}">
              {/* {% if contact_type == "tel" %}📞{% else %}📨{% endif%} */}
            </a>
            {/* {% endfor %} */}
          </td>
        </tr>
        {/* {% endfor %} */}
      </tbody>
    </table>
  );
}
