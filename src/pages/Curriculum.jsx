

// src/pages/Curriculum.jsx

export default function Curriculum() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-red-900 mb-6 border-b pb-2">
        State Board Curriculum (Scholastic)
      </h1>

      {/* Main Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-red-900 text-white text-sm md:text-base">
              <th className="py-3 px-4 text-left w-1/4">CLASSES</th>
              <th className="py-3 px-4 text-left w-2/4">SUBJECTS OFFERED</th>
              <th className="py-3 px-4 text-left w-1/4">EVALUATION</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">

            {/* I to VII section */}
            <tr className="bg-gray-50 align-top">
              <td className="py-4 px-4 font-semibold text-gray-900 border-t">
                I Standard to VII Standard
              </td>
              <td className="py-4 px-4 border-t">
                <p>I Language: Odia / English (as per school policy)</p>
                <p>II Language: English / Odia</p>
                <p>III Language: Hindi / Sanskrit (from allowed standards)</p>
                <p className="mt-2 font-semibold">Core Subjects:</p>
                <ul className="list-disc list-inside">
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Science</li>
                  <li>Computer Science, AI and Robotics (where applicable)</li>
                </ul>
              </td>
              <td className="py-4 px-4 border-t">
                <p>4 tests and 2 terminal exams in an academic year.</p>
              </td>
            </tr>

            {/* VIII to X section */}
            <tr className="bg-white align-top">
              <td className="py-4 px-4 font-semibold text-gray-900 border-t">
                VIII to X Standard
              </td>
              <td className="py-4 px-4 border-t">
                <p>I Language: Odia / English</p>
                <p>II Language: English / Odia</p>
                <p>III Language: Hindi / Sanskrit</p>
                <p className="mt-2 font-semibold">Core Subjects:</p>
                <ul className="list-disc list-inside">
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Science</li>
                  <li>Computer Science, AI and Robotics</li>
                </ul>
              </td>
              <td className="py-4 px-4 border-t">
                <p>4 assessments as FA1, FA2, FA3 and FA4</p>
                <p>(FA – Formative Assessments)</p>
                <p className="mt-2">2 exams as SA1 and SA2</p>
                <p>(SA – Summative Assessments)</p>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Optional note under table */}
      <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
        To enhance creativity and prepare students for competitive platforms, 
        NCERT books and activity-based learning methods are incorporated along 
        with the regular State Board curriculum.
      </p>
    </div>
  );
}
