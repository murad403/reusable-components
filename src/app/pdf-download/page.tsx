"use client";
import { Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: "#f9fafb" },
  title: { fontSize: 26, textAlign: "center", marginBottom: 20, color: "#1e40af", fontWeight: "bold" },
  name: { fontSize: 22, textAlign: "center", marginBottom: 30, color: "#1e40af" },
  row: { flexDirection: "row", marginBottom: 12, fontSize: 14 },
  label: { width: 120, fontWeight: "bold", color: "#374151" },
  value: { flex: 1, color: "#1f2937" },
  footer: { position: "absolute", bottom: 30, left: 0, right: 0, textAlign: "center", fontSize: 10, color: "#6b7280" },
});

const UserPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.name}>Murad</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Murad</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>21</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Student</Text>
        <Text style={styles.value}>No</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Family Members</Text>
        <Text style={styles.value}>7</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>description a kichui nai</Text>
      </View>

      <Text style={styles.footer}>
        Generated on {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

const PdfDownload = () => {
  return (
    <div className="text-gray-800 bg-gray-100 p-5 rounded-lg w-64 mx-auto mt-10">
      <h2 className="text-xl font-semibold text-center mb-4">Murad</h2>
      <p className="text-sm">Age: 21</p>
      <p className="text-sm">Student: No</p>
      <p className="text-sm">Family: 7 members</p>
      <p className="text-sm mt-3 text-gray-600">description a kichui nai</p>

      <PDFDownloadLink document={<UserPDF />} fileName="Murad_profile.pdf">
        {({ loading }) => (
          <button
            disabled={loading}
            className="mt-5 w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 rounded-lg transition cursor-pointer"
          >
            {loading ? "Preparing PDF..." : "Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PdfDownload;