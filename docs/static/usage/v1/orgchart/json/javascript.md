```html
<div id="json"></div>

<script>
  const orgData = {
    "company": {
      "id": "9bd82468-59b5-4bee-9b67-8e546608ed4f", "name": "Acme Inc.", "companies": [], "departments": [{
        "id": "66c482eb-179c-4d46-8ea2-cbc2200add8d",
        "name": "Executive Management",
        "departments": [{
          "id": "2f89186c-0a24-4f7f-b904-fb5a0a033bea",
          "name": "Marketing Department",
          "departments": [],
          "users": [{
            "id": "15e9cacc-59fe-4562-9f33-512b3711bc6c",
            "fullName": "Dr. Robert Mitchell",
            "supervisor": true,
            "position": null,
            "type": "USER"
          }, ...
  }

  const generateOrgChartHTML = (entity) => {
    if (!entity) return null;

    // Check if the department has a supervisor
    let supervisorUser = null;

    if (entity.users && entity.users.length > 0) {
      supervisorUser = entity.users.find(user => user.supervisor === true);
    }

    // Main node - display the name of the entity or the supervisor
    const item = document.createElement("wje-orgchart-item");
    item.textContent = supervisorUser ? `👔 ${supervisorUser.fullName}` : entity.name;

    // Container for child elements (only one slot for child nodes)
    const childSlot = document.createElement("wje-orgchart");
    childSlot.setAttribute("slot", "child");

    // Processing of other users (if they exist and do not have the `supervisor` flag)
    if (entity.users && entity.users.length > 0) {
      const nonSupervisors = entity.users.filter(user => !user.supervisor);

      if (nonSupervisors.length > 0) {
        const userGroup = document.createElement("wje-orgchart-group");

        nonSupervisors.forEach(user => {
          const userItem = document.createElement("wje-orgchart-item");
          userItem.textContent = "👤 " + user.fullName;
          userGroup.appendChild(userItem);
        });

        childSlot.appendChild(userGroup);
      }
    }

    // Processing of subordinate companies
    if (entity.companies && entity.companies.length > 0) {
      entity.companies.forEach(company => {
        const companyItem = generateOrgChartHTML(company);
        if (companyItem) {
          childSlot.appendChild(companyItem);
        }
      });
    }

    // Processing of departments
    if (entity.departments && entity.departments.length > 0) {
      entity.departments.forEach(department => {
        const departmentItem = generateOrgChartHTML(department);
        if (departmentItem) {
          childSlot.appendChild(departmentItem);
        }
      });
    }

    // Connecting the slot for subordinate elements
    if (childSlot.children.length > 0) {
      item.appendChild(childSlot);
    }

    return item;
  }

  const orgChartHTML = generateOrgChartHTML(orgData.company);
  if (orgChartHTML) {
    document.querySelector('#json').innerHTML = orgChartHTML.outerHTML;
    console.log("✅ OrgChart HTML successfully generated and inserted into the DOM.");
  } else {
    console.error("❌ Failed to generate OrgChart HTML.");
  }
</script>
```
